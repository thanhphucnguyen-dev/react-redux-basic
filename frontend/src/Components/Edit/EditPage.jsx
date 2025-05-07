import './edit.css';
import { useState } from 'react';
import Input from '../InputFields/Input';
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../redux/userSlice';

const EditPage = ( props ) => {

  const { setEdit } = props;

  const avaUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990"
  ];

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updatedUser = {
      name: name,
      age: age,
      about: about,
      themeColor: theme,
      avaUrl: url
    };
    dispatch(update(updatedUser))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section className="edit-container">
          <button className="close">Save</button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display Name" data={user.name} setData={setName} />
            <Input label="Age" data={user.age} setData={setAge} />
            <Input 
              inputType="textarea" 
              classStyle="input-about" 
              label="About" 
              data={user.about} 
              setData={setAbout} 
            />

            <label htmlFor="image">Avatar</label>
            <div className="input-image-container">
              {avaUrl.map((url, index) => {
                  return (
                    <>
                      <img src={url} alt="avatar" className="input-image" key={index} onClick={(e) => setUrl(e.target.src)} />
                    </>
                  )
              })}
            </div>
            <div className="theme-container">
              <label htmlFor="theme">Theme</label>
              <input type="color" className="input-theme" name="theme" id="theme" onChange={(e) => setTheme(e.target.value)} value={theme} />
            </div>
          </div>
        </section>

      </form>
    </>
  );
}

export default EditPage;
