import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';   
import './ShowCreators.css';
import { IconCamera } from '@tabler/icons-react';

function ShowCreators() {
    const [creators, setCreators] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCreators = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: true });

            console.log('=== FULL API RESPONSE ===', data);

            setCreators(data);
        };

        fetchCreators();
    }, []);

    const handleEdit = (creatorId) => {
        navigate(`/EditCreator/${creatorId}`);
    };

    const deleteCreator = async (id) => {
        await supabase
            .from('creators')
            .delete()
            .eq('id', id);

        setCreators(prev => prev.filter(c => c.id !== id));
        navigate('/');
    };

    const handleDetailedView = (creatorId) => {
        navigate(`/DetailsPage/${creatorId}`);
    };

    return (
        <div className="creators-background">

            <div className="read-posts-container">
                <h1 className="read-posts-title">CreatorVerse</h1>

                {!creators && <h2>Currently there are no creators!</h2>}

                <div className="posts-grid">
                    {creators && creators.map((creator) => (
                        <div 
                            key={creator.id} 
                            className="post-card"
                            style={{ backgroundImage: `url(${creator.imageUrl})` }}
                        >

                            <div className="post-actions">
                                <button onClick={() => handleEdit(creator.id)}>✏️</button>
                                <button onClick={() => handleDetailedView(creator.id)}>ⓘ</button>
                                <button onClick={() => deleteCreator(creator.id)}>✕</button>
                            </div>

                            <div className="post-icon">
                                <IconCamera size={40} color="#667eea" />
                            </div>

                            <h3 className="post-name">{creator.name}</h3>

                            <p className="post-detail">
                                <strong>Url:</strong> {creator.url}
                            </p>
                            
                            <p className="post-detail">
                                <strong>Description:</strong> {creator.description}
                            </p>

                            <p className="post-detail">
                                <strong>Image Url:</strong> {creator.imageUrl}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ShowCreators;
