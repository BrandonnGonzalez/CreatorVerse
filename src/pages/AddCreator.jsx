import { supabase } from '../client'
import { useState } from 'react'
import './AddCreator.css'

function AddCreator() {
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageUrl: ""
  });

  const addCreator = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase
      .from('creators')
      .insert({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        imageUrl: creator.imageUrl
      });

    console.log("DATA:", data);
    console.log("ERROR:", error);

    window.location = "/";
  }

  return (
    <div className="upload-page">
      <div className="upload-card">
        <h2 className="upload-title">Create your favorite Creator</h2>

        <form onSubmit={addCreator} className="upload-form">

          <label className="form-group">
            <span className="form-label">Name:</span>
            <input
              type="text"
              name="name"
              value={creator.name}
              onChange={(e) => setCreator({ ...creator, name: e.target.value })}
              required
              className="form-input"
            />
          </label>

          <label className="form-group">
            <span className="form-label">url</span>
            <input
              type="url"
              name="url"
              value={creator.url}
              onChange={(e) => setCreator({ ...creator, url: e.target.value })}
              required
              placeholder="Tiktok, Youtube, Twitch, Kick..."
              className="form-input"
            />
          </label>

          <label className="form-group">
            <span className="form-label">Description</span>
            <input
              type="text"
              name="description"
              value={creator.description}
              onChange={(e) => setCreator({ ...creator, description: e.target.value })}
              required
              placeholder="Creator description goes here!"
              className="form-input"
            />
          </label>

          <label className="form-group">
            <span className="form-label">Image URL</span>
            <input
              type="url"
              name="imageUrl"
              value={creator.imageUrl}
              onChange={(e) => setCreator({ ...creator, imageUrl: e.target.value })}
              required
              placeholder="Creator Picture goes here!"
              className="form-input"
            />
          </label>

          <button type="submit" className="submit-button">
            Submit Creator Card
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddCreator;
