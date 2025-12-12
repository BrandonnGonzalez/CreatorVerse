import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import './DetailedView.css';
import { IconCamera } from '@tabler/icons-react';

function DetailsPage() {
    const { id } = useParams();          // 🟣 Grab the dynamic ID from URL
    const [creator, setCreator] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();

            if (error) {
                console.error('Error fetching creator details:', error);
            } else {
                setCreator(data);
            }
        };

        fetchCreator();
    }, [id]);

    if (!creator) return <h2>Loading creator...</h2>;

    return (
        <div className="detail-container">

            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <div className="detail-card">

                <div className="detail-content">
                    <h1 className="detail-title">{creator.name}</h1>

                    <div className="detail-icon">
                        <IconCamera size={50} color="#667eea" />
                    </div>
                    <img className="creator-profile-img" src={creator.imageUrl} alt={`${creator.name} profile`} />

                    <p><strong>Youtube:</strong> {creator.url}</p>
                    <p><strong>Description:</strong> {creator.description}</p>
                    <p><strong>Birthday:</strong>{creator.birthday}</p>
                    <p><strong>Favorite Game: </strong>{creator.favorite_game}</p>
                    <p>Created on: {new Date(creator.created_at).toLocaleString()}</p>
                    <hr />

                    {/* 📌 Space for future features */}
                    <h2>More Info</h2>
                    <h2>...</h2>
                    
                </div>
            </div>

        </div>
    );
}

export default DetailsPage;
