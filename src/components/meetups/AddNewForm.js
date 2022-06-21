import {useRef} from "react";

import classes from "./AddNewForm.module.css";
import Card from "../ui/Card";

function AddNewForm() {
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle= titleInputRef.current.value;
        const enteredImage= imageInputRef.current.value;
        const enteredDescription= descriptionInputRef.current.value;
        const enteredAddress= addressInputRef.current.value;

        const meetupData= {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        console.log(meetupData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleInputRef} required />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image Url</label>
                <input type='url' id='image' ref={imageInputRef} required />
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' ref={addressInputRef} required />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' rows='4' ref={descriptionInputRef} required />
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default AddNewForm;