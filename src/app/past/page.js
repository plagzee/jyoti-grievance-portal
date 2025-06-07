'use client'

import { useEffect, useState } from "react";
import checkLogin from "../../../middleware/checkLogin";
import { FiTrash2 } from "react-icons/fi";

export default function pastGrievances() {

    const [grievances, setGrievances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    const fetchGrievance = async () => {
        const res = await fetch("/api/grievances");
        const data = await res.json();

        setGrievances(data.grievances);
        setLoading(false);
    }

    const toggleStatus = async (identity) => {

        const resolvedOrNot = grievances.find((g) => g._id === identity).status === "✅ Resolved" ? "❌ Unresolved" : "✅ Resolved";

        const res = await fetch("/api/grievances", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: identity, status: resolvedOrNot }),

        });

        const data = await res.json();

        fetchGrievance();

    }

    const deleteGrievance = async (id) => {
        const res = await fetch("/api/grievances", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: id }),
        });

        const data = await res.json();
        fetchGrievance();
    };

    useEffect(() => {
        setIsLoggedIn(checkLogin());
        fetchGrievance();
    }, []);

    if (!isLoggedIn) return null;

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="min-h-screen bg-[#f4f4f4] p-6 text-black">
            <h1 className="text-3xl font-bold mb-4 text-center font-mono">📜 Past Grievances</h1>

            {grievances.length === 0 ? (
                <div className="text-center text-lg text-gray-500">No grievances available.</div>
            ) : (
                <div className="max-h-[70vh] overflow-y-auto space-y-4">
                    {grievances.map((g) => (
                        <div key={g._id} className="p-4 border-2 border-black rounded-lg bg-white shadow-md">
                            <h2 className="font-bold text-xl text-[#20250f]">{g.title}</h2>
                            <p className="text-gray-700">{g.description}</p>
                            <p className="text-sm text-gray-500">Date: {new Date(parseInt(g.date)).toLocaleString()}</p>

                            <div className="flex items-center justify-between mt-3">
                                <span className="font-semibold text-gray-700">{g.status}</span>
                                <div className="flex gap-2 ml-auto">
                                    <button
                                        onClick={() => toggleStatus(g._id)}
                                        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 font-mono cursor-pointer"
                                    >
                                        Toggle Status
                                    </button>
                                    <button
                                        onClick={() => deleteGrievance(g._id)}
                                        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                                        title="Delete"
                                    >
                                        <FiTrash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};