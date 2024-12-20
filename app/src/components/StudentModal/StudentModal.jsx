import { useEffect, useState } from "react";
import './StudentModal.css';
import axios from "axios";
import PropTypes from 'prop-types';

const StudentModal = (props) => {
    const [workDays, setWorkDays] = useState(null);
    const [addr, setAddr] = useState("");
    const [reason, setReason] = useState("");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [minDate, setMinDate] = useState(null);
    const [minEndDate, setMinEndDate] = useState(null); // State for minimum end date

    useEffect(() => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const formattedNow = `${year}-${month}-${day}T${hours}:${minutes}`;
        setMinDate(formattedNow);
    }, []);

    useEffect(() => {
        if (startDate) {
            const start = new Date(startDate);
            start.setDate(start.getDate() + 1); // Add 1 day
            setMinEndDate(start.toISOString().slice(0, 16)); // Format to YYYY-MM-DDTHH:MM
        } else {
            setMinEndDate(null); // Reset if startDate is not set
        }
    }, [startDate]);

    const createReq = async (e) => {
        e.preventDefault();
        const appDetails = {
            address: addr,
            reason: reason,
            startDate: startDate,
            endDate: endDate,
            workDays: workDays,
            sid: props.userID,
        }

        try {
            const result = await axios.post("https://server-l1f2.onrender.com/api/student/addreq", appDetails);
            if (result) {
                props.toggleModal();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="modal-wrapper flex">
                <div className="modal">
                    <div className="modal-content flex">
                        <div className="modal-header flex">
                            <button className="modal-close-btn" onClick={props.toggleModal}>
                                <i className="fa-solid fa-xmark fa-xl" style={{ color: "#F0ECE5" }}></i>
                            </button>
                        </div>
                        <div className="modal-form">
                            <form method="POST" onSubmit={createReq}>

                                <label htmlFor="addr">Address</label> <br />
                                <textarea id="addr" name="addr" placeholder="Enter your Address" minLength={10} maxLength={200} onChange={(e) => setAddr(e.target.value)} rows={5} required></textarea> <br /><br />

                                <label htmlFor="reason">Reason</label> <br />
                                <input type="text" id="reason" name="reason" placeholder="Enter your Reason" maxLength={50} onChange={(e) => setReason(e.target.value)} required></input> <br /><br />

                                <label htmlFor="startdate">Start Date</label> <br />
                                <input type="datetime-local" id="startdate" name="startdate" onChange={(e) => setStartDate(e.target.value)} min={minDate} required></input> <br /><br />

                                <label htmlFor="enddate">End Date</label> <br />
                                <input type="datetime-local" id="enddate" name="enddate" onChange={(e) => setEndDate(e.target.value)} min={minEndDate} required></input> <br /><br />

                                <label htmlFor="workDays">Number Of Working Days</label> <br />
                                <input type="number" id="workDays" name="workDays" placeholder="Enter Number Of Working Days" maxLength={2} onChange={(e) => setWorkDays(e.target.value)} required></input> <br /><br />

                                <div className="checkbox-container flex">
                                    <input type="checkbox" name="validate" id="validate" required></input>
                                    <label htmlFor="validate" id="validate-text">Hereby, I confirm that the information provided is accurate and complete to the best of my knowledge, and I understand that false or misleading information may lead to disciplinary action.</label>
                                </div>

                                <button type="submit" className="modal-submit-btn">Create New Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

StudentModal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    userID: PropTypes.string.isRequired
}

export default StudentModal;
