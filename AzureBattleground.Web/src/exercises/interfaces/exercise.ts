export interface IExercise {
    id: Number,
    author: string,
    modifiedDate: Date,
    level: Number,
    name: string,
    description: string,
    estimatedTimeInMinutes: number,
    tags: string[]
}