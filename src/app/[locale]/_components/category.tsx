import { ICategory } from "../interface/interface";
import Image from "next/image";

const Category = ({ id, nom, image }: ICategory) => {
    return (
        <li
            key={id}
            className="p-2 bg-blancD9 rounded-lg cursor-pointer flex flex-row gap-2 items-center">
            {
                image
                && <Image
                    src={image}
                    alt={`logo de ${nom}`}
                    width={25}
                    height={25}
                />}
            {nom}
        </li>
    );
}

export default Category