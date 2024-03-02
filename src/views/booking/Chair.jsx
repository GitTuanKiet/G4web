
import { useState } from 'react';

const Chair = ({ id, checked, vip }) => {
    const [isChecked, setChecked] = useState(false);
    const status = checked ? true : false;

    const color = checked ? '#AAAAAA99' : vip === '200.000' ? '#F3D71E' : '#20CF68';

    const handleButtonClick = () => {
        setChecked(!isChecked);
        onChairClick(id, !isChecked);
    };
    return (
        <>
            <button
                className="w-8 h-8 border rounded-xl flex items-center justify-center text-[10px]"
                style={{
                    backgroundColor: color,
                    opacity: isChecked ? 0.5 : 1, 
                }}
                disabled={status}
                onClick={handleButtonClick}           
            >
                {isChecked ? '✔' : id}
            </button>
        </>
    );
};

export default Chair;

