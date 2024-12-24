import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Page = () => {
    const { level1, level2 } = useParams();
    return (
        <div>
            <h1>{`Page: ${level1} ${level2 ? `/ ${level2}` : ''}`}</h1>
        </div>
    );
};const NotFound = () => (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>404: Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
            Go back to Home
        </a>
    </div>
);


const App = () => {
    return (
        <Router>
            <Routes>
                {/* Основні маршрути */}
                <Route path="/:level1" element={<Page />} />
                <Route path="/:level1/:level2" element={<Page />} />

                {/* Обробка невідомих маршрутів */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
