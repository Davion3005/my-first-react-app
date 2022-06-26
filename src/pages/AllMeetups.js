import {useState, useEffect} from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
        id: 'm1',
        title: 'This is a first meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
        id: 'm2',
        title: 'This is a second meetup',
        image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Meetupstreet 5, 12345 Meetup City',
        description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
];

function AllMeetupsPage() {
    const [loading, setLoading]= useState(true);
    const [loadedMeetups, setLoadedMeetups]= useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch('https://test-react-73527-default-rtdb.firebaseio.com/meetups.json')
            .then((response)=> {
                return response.json();
            })
            .then((data)=> {
                const meetups= [];

                for (const key in data) {
                    const meetup= {
                        id: key,
                        ...data[key]
                    }

                    meetups.push(meetup);
                }

                setLoading(false);
                setLoadedMeetups(meetups);
        });
    }, [])
    if (loading) {
        return <section>
            <h1>Loading...</h1>
        </section>
    }

    return <section>
        <h1>All Meetups page</h1>
        <MeetupList meetup={loadedMeetups}/>
    </section>;
}

export default AllMeetupsPage;