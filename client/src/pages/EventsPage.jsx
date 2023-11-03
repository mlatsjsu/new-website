import React, { useState } from "react";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

const Events = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [eventModalContent, setEventModalContent] = useState({
    title: "",
    date: "",
    place: "",
    description: "",
  });

  const allEvents = [
    /*
    {
      title: "",
      date: "",
      place: "",
      description:"",
    },
    */
  ];

  return (
    <div>
      {showEventModal && (
        <div
          className="absolute top-0 left-0 bottom-0 right-0 z-10"
          onClick={() => setShowEventModal(false)}
        ></div>
      )}
      <div className="relative">
        <EventModal
          eventModalContent={eventModalContent}
          showEventModal={showEventModal}
          setShowEventModal={setShowEventModal}
        ></EventModal>
        <h2 className="text-3xl mt-10">Upcoming Events</h2>
        <section className="flex flex-col justify-center ">
          <div className="flex flex-col flex-wrap md:flex-row p-9 md:p-28 gap-5">
            {allEvents.length == 0 ? (
              <p className="text-lg text-slate-800">
                Look out for upcoming events!
              </p>
            ) : (
              allEvents.map((e, i) => (
                <EventCard
                  key={i}
                  title={e.title}
                  date={e.date}
                  place={e.place}
                  description={e.description}
                  setShowEventModal={setShowEventModal}
                  setEventModalContent={setEventModalContent}
                ></EventCard>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;
