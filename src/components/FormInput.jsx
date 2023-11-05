import { useState } from 'react';
import './FormInput.css'
function FormInput(props) {
    const [focused, setFoucsed] = useState(false);
    const { label, errormessege, onChange, id, ...others } = props;

    const handelFocus = (e) => {
        setFoucsed(true);
    }
    return (
        <div className="form-input">
            <label htmlFor="">{label}</label>
            <input onChange={onChange}
                {...others} onBlur={handelFocus}
                focused={focused.toString()}
                onFocus={() => others.name === "confirmpassword" && setFoucsed(true)} />
            <span>{errormessege}</span>
        </div>
    )
}

export default FormInput
