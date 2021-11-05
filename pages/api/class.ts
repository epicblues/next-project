import { ObjectId } from "bson";

export class Diary {
  _id: ObjectId;
  user_email: string;
  upload_date: Date;
  calorie_target: number;
  calorie_total: number;
  success: boolean;
  review: string;

  constructor(
    user_email: string,
    calorie_target: number,
    calorie_total: number,
    review: string
  ) {
    this.user_email = user_email;
    this.calorie_target = calorie_target;
    this.calorie_total = calorie_total;
    this.review = review;
    this.upload_date = new Date();
    this.success = false;
    this._id = new ObjectId(user_email);
  }
}
