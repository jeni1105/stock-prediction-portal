import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosinstance.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [ticker, setTicker] = useState('');
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [plot, setPlot] = useState();
  const [ma100, setMA100] = useState();
  const [ma200, setMA200] = useState();
  const [prediction, setPrediction] = useState();
  const [mse, setMse] = useState();
  const [rmse, setRmse] = useState();
  const [r2, setR2] = useState();

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get('/protected-view');
        console.log('success', response.data);
      } catch (error) {
        console.error('Error fetching protected data:', error);
      }
    };
    fetchProtectedData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post('/predict/', { ticker });

      const backendRoot = import.meta.env.VITE_BACKEND_ROOT;
      setPlot(`${backendRoot}${response.data.plot_img}`);
      setMA100(`${backendRoot}${response.data.plot_100_dma}`);
      setMA200(`${backendRoot}${response.data.plot_200_dma}`);
      setPrediction(`${backendRoot}${response.data.plot_prediction}`);
      setMse(response.data.mse);
      setRmse(response.data.rmse);
      setR2(response.data.r2);

      if (response.data.error) setError(response.data.error);
    } catch (error) {
      console.error('Error fetching stock prediction:', error);
      setError('Failed to fetch stock data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter stock ticker"
              onChange={(e) => setTicker(e.target.value)}
              required
            />
            {error && <small className="text-danger">{error}</small>}
            <button type="submit" className="btn btn-info mt-3">
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} spin className="me-2" />
                  Please wait...
                </>
              ) : (
                'Get Stock Data'
              )}
            </button>
          </form>
        </div>

        <div className="prediction mt-5">
          {[plot, ma100, ma200, prediction].map(
            (img, idx) =>
              img && (
                <div className="p-3" key={idx}>
                  <img src={img} style={{ maxWidth: '100%' }} />
                </div>
              )
          )}

          {prediction && (
            <div className="text-light p-3">
              <h4>Model Evaluation Metrics</h4>
              <p>Mean Squared Error: {mse}</p>
              <p>Root Mean Squared Error: {rmse}</p>
              <p>R-Squared: {r2}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
