// src/pages/About.js

export default function About() {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="display-4 fw-bold mb-3">About This ToDo App</h1>
                <p className="lead">
                    Welcome! 👋 I’m <strong>Chander</strong>, and this app helps you manage your daily tasks with simplicity and focus.
                </p>
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">✨ Why this app?</h5>
                            <p className="card-text">
                                In a world full of distractions, this ToDo app is built to help you:
                            </p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">✅ Capture your tasks quickly</li>
                                <li className="list-group-item">✅ Stay organized with clear priorities</li>
                                <li className="list-group-item">✅ Track your daily progress</li>
                                <li className="list-group-item">✅ Focus on what truly matters</li>
                            </ul>
                            <p className="card-text mt-3">
                                Built using <strong>React</strong> and <strong>Bootstrap</strong> for a clean, responsive experience.
                            </p>
                            <p className="card-text">
                                Feel free to <a href="mailto:your-email@example.com" className="text-decoration-none">reach out</a> if you have suggestions or feedback!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
