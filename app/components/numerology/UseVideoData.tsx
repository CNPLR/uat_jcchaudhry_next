import { useState, useEffect } from "react";

export const useVideoData = (path: any) => {
    const [videos, setVideos] = useState(null);
    const [world, setWorld] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const [numerologyRes, worldRes] = await Promise.all([
                    fetch(`${path}getvideosbycategory/category/Numerology`),
                    fetch(`${path}getvideosbycategory/category/World`)
                ]);

                const [numerologyData, worldData] = await Promise.all([
                    numerologyRes.json(),
                    worldRes.json()
                ]);

                setVideos(numerologyData?.data?.slice(0, 3) || []);
                setWorld(worldData || null);
            } catch (error) {
                console.error('Video fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [path]);

    return { videos, world, loading };
};
