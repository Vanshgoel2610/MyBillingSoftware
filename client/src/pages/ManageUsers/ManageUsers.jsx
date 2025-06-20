import UserForm from "../../Components/UserForm/UserForm"
import UserList from "../../Components/UserList/UserList"
import "./ManageUsers.css"

const ManageUsers = () => {
    return (
        <div className="category-container text-light">
            <div className="left-column"><UserForm/></div>
            <div className="right-column"><UserList/></div>
        </div>
    )
}

export default ManageUsers