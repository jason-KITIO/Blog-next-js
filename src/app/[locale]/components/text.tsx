import React from "react";
import Image from "next/image";

// export interface IModal {
//     close: boolean,
//     title: string,
//     subtitle: string,
//     imageSrc: string,
//     btnCancelLien: string,
//     btnContinuer: string,
//     btnOkLien: string,
//     // nbBtn: number, 
// }

export interface IModalProps {
    title: string;
    description: string;
    open: boolean;
    image?: string;
    // component: ReactNode;
    onClose: () => void;
    type: "info" | "danger" | "melria"
}

export interface ICustomButtonProps {
    type: "info" | "danger" | "melria"
    onClose: () => void;
}

// const Modal: React.FC<IModal> = ({ close, title, subtitle, imageSrc, btnCancelLien, btnContinuer, btnOkLien }) => {
//     const [btnClose, setBtnClose] = useState();
//     const [visible, setBtnClose] = useState();

//     const HandleClose = () => {

//     }

//     return (
//         <div>
//             <button onClick={() => HandleClose()}>

//             </button>
//         </div>
//     )
// }

// export const CustomButton = ({ type, onClose }: ICustomButtonProps) => {
//     return (
//         <div>
//             {type == "danger" && (
//                 <div>
//                     <button onClick={() => onClose}>Annuler</button>
//                     <button>Continuer</button>
//                 </div>
//             )}

//             {type == 'info' && (
//                 <button>OK</button>
//             )}

//             {type == "melria" && (
//                 <div>
//                     🥹🤦‍♀️
//                 </div>
//             )
//             }
//         </div>
//     )
// }

const ModalBox = ({ title, description, type, image, onClose }: IModalProps) => {
    const CustomButton = () => {
        return (
            <div>
                {type == "danger" && (
                    <div>
                        <button onClick={() => onClose}>Annuler</button>
                        <button>Continuer</button>
                    </div>
                )}

                {type == 'info' && (
                    <button>OK</button>
                )}

                {type == "melria" && (
                    <div>
                        🤩🤦‍♀️
                    </div>
                )
                }
            </div>
        )
    }
    return (
        <div>
            <div>
                <button onClick={() => onClose}>close</button>
            </div>
            <h2>{title}</h2>
            <div>
                {image &&
                    <Image
                        src={image}
                        alt="Image"
                        width={100}
                        height={100}
                    />
                }
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
            <div>
                <CustomButton />
            </div>
        </div>
    )
}

export default ModalBox