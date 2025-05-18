export default function Success() {
    return (
        <div className="bg-green-800 w-[100vw] h-[100vh] flex items-center justify-center p-4">
            <div className="flex flex-col items-center justify-center m-auto text-xl font-semibold font-mono">
                <h1 className="text-3xl font-bold underline">Your Grievance has been created successfully</h1>
                <br />
                <p>
                    {"Thank you for submitting your grievance. Your boyfriend get back to you soon addressing the issue."}
                </p>
                <br />
                <a className="text-blue-400 underline cursor-pointer" href="/portal">{"Click here to go back to Grievance Portal"}</a>
            </div>
        </div>
    );
}