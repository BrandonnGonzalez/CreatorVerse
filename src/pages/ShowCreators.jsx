import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';   
import './ShowCreators.css'
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

            // 🔍 LOG THE DATA TO CONSOLE
            console.log('=== FULL API RESPONSE ===');
            console.log('Data Array:', data);
            console.log('Number of posts:', data?.length);

            // Show the structure of the first item
            if (data && data.length > 0) {
                console.log('=== FIRST POST STRUCTURE ===');
                console.log(data[0]);
                console.log('Available fields:', Object.keys(data[0]));
            }

            setCreators(data);
        };

        fetchCreators();
    }, []);

    return (
        <div>
            <div className="read-posts-container">
            <h1 className="read-posts-title">CreatorVerse</h1>
            {!creators && <h2>Currently there are no creators!</h2>}
            <div className="posts-grid">
                {creators && creators.map((creator) => (
                    <div key={creator.id} className="post-card" style={{backgroundImage: `url(${creator.imageUrl})`,}}>
                        <div className="post-actions">
                            <button>
                            
                                ✏️
                            </button>
                            <button>
                            
                                ✕
                            </button>
                        </div>

                        <div className="post-icon">
                            <IconCamera size={40} color="#667eea" />
                        </div>
                        <h3 className="post-name">{creator.name}</h3>
                        <p className="post-detail">
                            <strong style={{ color: '#667eea' }}>Url:</strong> {creator.url}
                        </p>
                        <p className="post-detail">
                            <strong style={{ color: '#667eea' }}>Description:</strong> {creator.description}
                        </p>
                        <p className="post-detail">
                            <strong style={{ color: '#667eea' }}>Image Url:</strong> {creator.imageUrl}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default ShowCreators;