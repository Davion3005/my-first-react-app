import {useNavigate} from "react-router-dom";

import AddNewForm from "../components/meetups/AddNewForm";

function NewMeetupsPage() {
    const navigate= useNavigate();

    function addNewHandler(data) {
        console.log(data);
        fetch(
            'https://test-react-73527-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/', {replace: true});
        });
    }

    return <section>
        <h1>Add new meetup</h1>
        <AddNewForm onAddMeetup={addNewHandler} />
    </section>
}

export default NewMeetupsPage;