import { set,ref, get, remove} from 'firebase/database'
import { removeSpecials } from "../utils/utils";
import { db } from '.';
import { QNAType, userAnswerType } from '../types';

export const  generateRandomUid = () => Date.now().toString(36) + Math.random().toString(36).substring(2);


export async function addQuestionToDb(question:string,questionedBy:string,profilePicture:string){
    if (question==="" || question==="/") {
        throw new Error("question should not be empty")
    }
    const key = removeSpecials(question);
    const data={
        answers:{},
        question,
        questionedBy,
        profilePicture
    }
    await set(ref(db,`/questions/${key}`),data);
}
export async function addAnswerToDb(question:string,answer:string,answeredBy:string,imgUrl:string,answerKey:string,profilePicture:string,uid:string){
    const questionKey = removeSpecials(question);
    await Promise.all(
        [set(ref(db,`/questions/${questionKey}/answers/${answerKey}`),
        {
        vote:0,
        answer,
        answeredBy,
        imgUrl,
        profilePicture
        }
        ),
        set(ref(db,`/answers/${uid}/${questionKey}/${answerKey}`),{
        answer,
        answeredBy,
        imgUrl,
        profilePicture
        })
    ]
    )
}
export async function getAllQuestions(uid:string) {
    const [question,answer] = await Promise.all([get(ref(db,"/questions")),get(ref(db,`/answers/${uid}`))])
    return {
        qna:question.val() as QNAType,
        ans:answer.val() as userAnswerType
    }
}
export async function deleteAnswer(question:string,answerKey:string,uid:string){
    const questionKey = removeSpecials(question);
    await Promise.all([
        remove(ref(db,`/questions/${questionKey}/answers/${answerKey}`)),
        remove(ref(db,`/answers/${uid}/${questionKey}/${answerKey}`))
    ])

}
export async function VoteDb(question:string,ansKey:string,uid:string,inc:boolean,downVoted:boolean){
    const questionKey = removeSpecials(question);
    if (downVoted) {
        await Promise.all([
            remove(ref(db,`/questions/${questionKey}/answers/${ansKey}/voters/${uid}`)),
            inc?set(ref(db,`/questions/${questionKey}/answers/${ansKey}/downVoters`),{[uid]:uid}):
            remove(ref(db,`/questions/${questionKey}/answers/${ansKey}/downVoters/${uid}`))
        ])
    }else{
        await Promise.all([
            remove(ref(db,`/questions/${questionKey}/answers/${ansKey}/downVoters/${uid}`)),
            inc?set(ref(db,`/questions/${questionKey}/answers/${ansKey}/voters`),{[uid]:uid}):
            remove(ref(db,`/questions/${questionKey}/answers/${ansKey}/voters/${uid}`))
        ])
    }
}