import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams, useNavigate } from 'react-router-dom';
import './EditCreator.css';

function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [creator, setCreator] = useState({ id: null, name: "", url: "", description: "", imageUrl: "" });

    // Fetch the existing member data when component loads
    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            if (data) {
                setCreator(data);
            }
        };
        fetchCreator();
    }, [id]);

    const updateCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url, description: creator.description, imageUrl: creator.imageUrl })
            .eq('id', id);
        navigate('/');
    };

    const deleteCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .delete()
            .eq('id', id)
        navigate('/');
    }



    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    return (
        <div className="edit-page">
            <div className="edit-card">
                <button
                    onClick={() => navigate('/')}
                    className="back-button"
                >
                    ← Back to Home
                </button>

                <h2 className="edit-title">Edit Your Creator</h2>

                <form className="edit-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={creator.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="url" className="form-label">
                            URL:
                        </label>
                        <input
                            type="text"
                            id="url"
                            name="url"
                            value={creator.url}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="form-label">
                            Description:
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={creator.description}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="imageUrl" className="form-label">
                            Image URL:
                        </label>
                        <input
                            type="number"
                            id="imageUrl"
                            name="imageUrl"
                            value={creator.imageUrl}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="button-group">
                        <button
                            type="submit"
                            onClick={updateCreator}
                            className="update-button"
                        >
                            Update Creator
                        </button>

                        <button
                            type="button"
                            onClick={deleteCreator}
                            className="delete-button-form"
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPost;