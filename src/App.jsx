import Terminal from './components/Terminal';
import Footer from './components/Footer';

export default function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <main style={{ flex: 1 }}>
                <Terminal />
            </main>
            <Footer />
        </div>
    );
}