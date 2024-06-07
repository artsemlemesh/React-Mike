import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInstructors,
  fetchClasses,
  fetchSchedules,
} from "./scheduleSlice";

const ScheduleComponent = () => {
  const dispatch = useDispatch();
  const instructors = useSelector((state) => state.schedule.instructors);
  const classes = useSelector((state) => state.schedule.classes);
  const schedule = useSelector((state) => state.schedule.schedules);

  useEffect(() => {
    dispatch(fetchInstructors());
    dispatch(fetchSchedules());
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <>
    <div>schedule</div>
    <div>
      <h1>Instructors</h1>
      <ul>
        {instructors.data.map((instructor) => (
          <li key={instructor.id}>{instructor.bio}</li>
        ))}
      </ul>
      <h1>Classes</h1>
      <ul>
        {classes.data.map((classItem) => (
          <li key={classItem.id}>{classItem.name}</li>
        ))}
      </ul>
      <h1>Schedule</h1>
      <ul>
        {schedule.data.map((sched) => (
          <li key={sched.id}>
            {sched.class_instance.name} - {sched.date} - {sched.start_time} to{" "}
            {sched.end_time}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};


export default ScheduleComponent