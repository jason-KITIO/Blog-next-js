
interface Itoast {
    title: string;
    description: string;
    close: boolean;
    type: "danger" | "warning" | "success";
    position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    onClose: () => void;
}

export const Toast: React.FC <Itoast>=({title, description, onClose, type})=>{
    const CustomButton = () =>{
        return(
            <div>
               { type== "danger" && <button> X</button>
               }
               
               { type== "warning" && <button> !!</button>
               }

               { type== "success" && <button> OK</button>
               }

            </div>
        )
    }
    return(
        <div>
            <button onClick={() => onClose()}>close</button>
            <h1>{title}</h1>
            <p>{description}</p>
            <CustomButton />
        </div>
    )

}

