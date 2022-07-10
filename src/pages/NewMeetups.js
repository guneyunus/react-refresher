import NewMeetupForm from "../components/meetup/NewMeetup";

function NewMeetupsPage(){
   function addMeetupHandler(meetupData){
    fetch('https://react-getting-started-2adc8-default-rtdb.firebaseio.com/meetups.json'
    ,{
        method : 'POST',
        body : JSON.stringify(meetupData),
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    );
   }
   
   return <section>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
}

export default NewMeetupsPage;