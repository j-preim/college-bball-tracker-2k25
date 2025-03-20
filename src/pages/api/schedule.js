import { schedule } from "sportradar";

export default function handler(req, res) {
     res.status(200).json({ schedule });
}