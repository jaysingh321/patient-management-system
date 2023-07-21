import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, editUser } from "../../store/userActions";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "../Users/userTable.scss";

const UserTable = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: "", name: "" });
  const [editId, setEditId] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  const handleAdd = () => {
    setFormData({ id: "", name: "" });
    setShowForm(true);
  };

  const handleEdit = (user) => {
    setEditedUser(user);
    setFormData(user);
    setEditId(user.id);
    const tableRow = document.getElementById(`user-${user.id}`);
    tableRow.scrollIntoView();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editId) {
      dispatch(editUser(editId, formData.name));
      setEditId(null);
    } else {
      const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newUser = { id: newId, name: formData.name };
      dispatch(addUser(newUser));
    }
    setShowForm(false);
  };

  return (
    <div className="UserTable">
      <h1>Patients Details</h1>

      <div style={{ "margin-left": "120px" }}>
        <Button
          name="Add User"
          className="button button--primaryButton"
          onClick={handleAdd}
        />
      </div>

      {showForm && (
        <div style={{ "margin-left": "120px" }}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <Input
                type="text"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                required={true}
                disabled={false}
                style={{ backgroundColor: "none" }}
              />
            </label>
            <Button
              name="Add"
              className="button button--primaryButton"
              type="submit"
            />
          </form>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} id={`user-${user.id}`}>
              <td>{user.id}</td>
              <td>
                {editedUser === user ? (
                  <form onSubmit={handleSubmit}>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(event) =>
                        setFormData({ ...formData, name: event.target.value })
                      }
                      required={true}
                      disabled={false}
                      style={{ backgroundColor: "none" }}
                    />
                    <Button
                      name="Update"
                      className="button button--primaryButton"
                      type="submit"
                    />
                  </form>
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editedUser === user ? (
                  <Button
                    name="Cancel"
                    className="button button--secondaryButton"
                    onClick={() => setEditedUser(null)}
                  />
                ) : (
                  <>
                    <Button
                      name="Edit"
                      className="button button--secondaryButton"
                      onClick={() => handleEdit(user)}
                    />
                    <Button
                      name="Delete"
                      className="button button--tertiaryButton"
                      onClick={() => handleDelete(user.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
