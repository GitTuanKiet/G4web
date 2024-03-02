import { useState } from 'react';
const CoupleChair = ({ id, checked }) => {
    const color = checked ? '#AAAAAA99' : '#FC0909CC';
    const [isChecked, setChecked] = useState(false);
    const status = checked ? true : false;
    const handleButtonClick = () => {
        setChecked(!isChecked);
        const chairInfo = { id, checked: !isChecked, price: vip };
        onChairClick(chairInfo);
    };
    return (
        <>
            <button
                className="w-16 h-8 border rounded-xl flex items-center justify-center text-[10px] text-white"
                style={{
                    backgroundColor: color,
                    opacity: isChecked ? 0.5 : 1, // Change opacity when button is disabled
                }}
                disabled={status}
                onClick={handleButtonClick}
            >
                {isChecked ? '✔' : id}
            </button>
        </>
    )
}
export default CoupleChair;
