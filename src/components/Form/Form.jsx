import './Form.scss';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {actionAddProduct} from "../../reducers";

const Form = () => {
    const [userIdValue, setUserIdValue] = useState(0);
    const [titleValue, setTitleValue] = useState("");
    const [bodyValue, setBodyValue] = useState("");

    const dispatch = useDispatch();

    const handleOnChange = (e, func) => {
        func(e.target.value);

    }

    const handleDisabled = () => {
        return !(userIdValue > 0 && titleValue.trim().length !== 0 && bodyValue.trim().length > 0);
    }

    const resetValues = () => {
        setUserIdValue(0);
        setTitleValue("");
        setBodyValue("");
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: titleValue,
                body: bodyValue,
                userId: userIdValue,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const result = await response.json();
        dispatch(actionAddProduct(result));
        resetValues();
    }

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <label className="form__label">
                <span className="form__text">User ID: </span>
                <input type="number"
                       className="form__input"
                       value={userIdValue}
                       onChange={(e) => handleOnChange(e,setUserIdValue,)}/>
            </label>
            <label className="form__label">
                <span className="form__text">Title</span>
                <input type="text"
                       className="form__input"
                       value={titleValue}
                       onChange={(e) => handleOnChange(e,setTitleValue)}/>
            </label>
            <label className="form__label">
                <span className="form__text">Body</span>
                <textarea type="text"
                       className="form__input form__input--area"
                       value={bodyValue}
                       onChange={(e) => handleOnChange(e,setBodyValue)}/>
            </label>
            <button type="submit" className="form__submit-btn" disabled={handleDisabled()}>Add post</button>
        </form>
    )
}

export default Form;