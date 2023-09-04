import path from "path";
import { promises as fs } from "fs";
import { Cars } from "../../../interfaces/types";

export default async function handler(req, res) {
  if (req.query.idOferty == "undefined") return;
  const jsonDirectory = path.join(process.cwd(), "data");
  const fileContents = await fs.readFile(jsonDirectory + "/cars.json", "utf8");
  const data = JSON.parse(fileContents);

  const index = data.cars.findIndex(
    (el) => el.carId == Number(req.query.idOferty)
  );

  if (index !== -1) res.status(200).json(data.cars[index]);
  else res.status(404).json({ msg: "Błędna oferta- 404" });
}
