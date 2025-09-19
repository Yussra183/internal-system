// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

// const Notifications = () => {
//   const { notifications, markAsRead } = useContext(AuthContext);

//   const unreadNotifications = notifications.filter((n) => !n.read);

//   return (
//     <div>
//       <h2>Notifications</h2>
//       {unreadNotifications.length === 0 ? (
//         <p>No new notifications</p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {unreadNotifications.map((n) => (
//             <li
//               key={n.id}
//               style={{
//                 border: "1px solid #ccc",
//                 marginBottom: "10px",
//                 padding: "10px",
//                 borderRadius: "8px",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <div>
//                 <p><strong>Title:</strong> {n.title}</p>
//                 <p><strong>Type:</strong> {n.type}</p>
//                 <p><strong>Comment:</strong> {n.comment}</p>
//                 <p><small>Time: {n.time}</small></p>
//               </div>
//               <button
//                 onClick={() => markAsRead(n.id)}
//                 style={{
//                   background: "#1ca3de",
//                   color: "white",
//                   border: "none",
//                   padding: "8px 12px",
//                   borderRadius: "6px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Accept
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}

//       <hr />
//       <h3>All Notifications History</h3>
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {notifications.map((n) => (
//           <li
//             key={n.id}
//             style={{ borderBottom: "1px solid #eee", padding: "5px 0" }}
//           >
//             <span style={{ fontWeight: n.read ? "normal" : "bold" }}>
//               [{n.read ? "Read" : "New"}] {n.title} - {n.type} - {n.comment} ({n.time})
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Notifications;





import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Notifications.css"; // <-- add css

const Notifications = () => {
  const { notifications, markAsRead } = useContext(AuthContext);

  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      {unreadNotifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul className="notifications-list">
          {unreadNotifications.map((n) => (
            <li key={n.id} className="notification-item">
              <div className="notification-details">
                <p><strong>Title:</strong> {n.title}</p>
                <p><strong>Type:</strong> {n.type}</p>
                <p><strong>Comment:</strong> {n.comment}</p>
                <p><small>Time: {n.time}</small></p>
              </div>
              <button
                onClick={() => markAsRead(n.id)}
                className="notification-btn"
              >
                Accept
              </button>
            </li>
          ))}
        </ul>
      )}

      <hr />
      <h3>All Notifications History</h3>
      <ul className="history-list">
        {notifications.map((n) => (
          <li key={n.id} className="history-item">
            <span className={n.read ? "" : "bold"}>
              [{n.read ? "Read" : "New"}] {n.title} - {n.type} - {n.comment} ({n.time})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;

