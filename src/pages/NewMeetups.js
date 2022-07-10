import NewMeetupForm from "../components/meetup/NewMeetup";
import {useHistory} from 'react-router-dom';

function NewMeetupsPage(){
    const history = useHistory();


   function addMeetupHandler(meetupData){
    fetch('https://react-getting-started-2adc8-default-rtdb.firebaseio.com/meetups.json'
    ,{
        method : 'POST',
        body : JSON.stringify(meetupData),
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    ).then(()=>{
        history.replace('/');
    });
   }
   
   return <section>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
}

export default NewMeetupsPage;