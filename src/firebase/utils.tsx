import { set,ref, get, remove} from 'firebase/database'
import { removeSpecials } from "../utils/utils";
import { db } from '.';
import { QNAType } from '../types';

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
export async function addAnswerToDb(question:string,answer:string,answeredBy:string,imgUrl:string,answerKey:string,profilePicture:string){
    const questionKey = removeSpecials(question);
    await set(ref(db,`/questions/${questionKey}/answers/${answerKey}`),
    {
    vote:0,
    answer,
    answeredBy,
    imgUrl,
    profilePicture
    }
    )
}
export async function getAllQuestions() {
    const res = await get(ref(db,"/questions"));
    return res.val() as QNAType;
    
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