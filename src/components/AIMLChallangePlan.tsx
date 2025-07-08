const AIMLChallengePlan = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-4xl mx-auto my-8">
      <p className="text-[30px] font-bold text-center mb-4 text-white">90-Day AI/Machine Learning Mastery Challenge</p>
      <p className="text-[15px] leading-6 mb-4 text-white">
        <span className="font-bold">Key Technologies: </span>
        Python, NumPy, Pandas, Matplotlib/Seaborn, scikit-learn, TensorFlow/Keras (or PyTorch),
        Jupyter Notebooks, Git/GitHub.
      </p>
      <p className="text-[15px] leading-10 mb-2 text-white">
        <span className="font-bold">Core Philosophy: </span>
        Understand the data, apply algorithms, interpret results. Focus on practical application and building intuition.
      </p>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 1: </span>
        Python for Data Science & ML Fundamentals (Days 1-30)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 1:</span>
        Python for Data & Basic Data Handling
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Python Fundamentals: </span>Review data types, control flow, functions, object-oriented programming.</li>
        <li><span className="font-bold">NumPy: </span>Arrays, array operations, broadcasting.</li>
        <li><span className="font-bold">Pandas: </span>DataFrames, Series, reading/writing data (CSV, Excel), basic data manipulation (filtering, sorting).</li>
        <li><span className="font-bold">Git & GitHub: </span>Set up repositories for all ML projects.</li>
        <li><span className="font-bold">Project: </span>Load a public dataset (e.g., from Kaggle), perform basic data inspection, and clean missing values/duplicates using Pandas.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 2:</span>
        Exploratory Data Analysis (EDA) & Visualization
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Matplotlib & Seaborn: </span>Create various plots (histograms, scatter plots, box plots, heatmaps) to understand data distributions and relationships.</li>
        <li><span className="font-bold">EDA Techniques: </span>Identify outliers, correlations, and patterns.</li>
        <li><span className="font-bold">Jupyter Notebooks: </span>Master using Jupyter for interactive data analysis and presentation.</li>
        <li><span className="font-bold">Project: </span>Perform a comprehensive EDA on a new dataset, generating insightful visualizations and summarizing key findings in a Jupyter Notebook.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 3:</span>
        Supervised Learning - Regression
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Machine Learning Concepts: </span>Supervised vs. Unsupervised, Training/Testing sets, Overfitting/Underfitting.</li>
        <li><span className="font-bold">scikit-learn Basics: </span>Data preprocessing (scaling, encoding), model training, prediction.</li>
        <li><span className="font-bold">Regression Models: </span>Linear Regression, Polynomial Regression.</li>
        <li><span className="font-bold">Evaluation Metrics: </span>MAE, MSE, R-squared.</li>
        <li><span className="font-bold">Project: </span>Build a model to predict house prices or a similar continuous variable using linear regression with scikit-learn. Evaluate its performance.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 4:</span>
        Supervised Learning - Classification
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Classification Models: </span>Logistic Regression, Decision Trees, K-Nearest Neighbors (KNN), Support Vector Machines (SVM).</li>
        <li><span className="font-bold">Evaluation Metrics: </span>Accuracy, Precision, Recall, F1-Score, Confusion Matrix.</li>
        <li><span className="font-bold">Cross-Validation: </span>Techniques for robust model evaluation.</li>
        <li><span className="font-bold">Project: </span>Build a model to classify customer churn or predict survival (e.g., Titanic dataset) using multiple classification algorithms. Compare their performance.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 2: </span>
        Deep Learning & Advanced ML (Days 31-60)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 5:</span>
        Introduction to Neural Networks
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Neural Network Concepts: </span>Perceptrons, Layers, Activation Functions (ReLU, Sigmoid, Softmax), Backpropagation (high-level).</li>
        <li><span className="font-bold">TensorFlow/Keras Basics: </span>Building sequential models, compiling, training.</li>
        <li><span className="font-bold">Hyperparameter Tuning: </span>Learning rate, batch size, epochs.</li>
        <li><span className="font-bold">Project: </span>Build a simple Artificial Neural Network (ANN) using Keras to classify a tabular dataset (e.g., Iris, Diabetes).</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 6:</span>
        Convolutional Neural Networks (CNNs)
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">CNN Architecture: </span>Convolutional layers, Pooling layers, Flattening, Dense layers.</li>
        <li><span className="font-bold">Image Preprocessing: </span>Data augmentation.</li>
        <li><span className="font-bold">Transfer Learning (Introduction): </span>Using pre-trained models.</li>
        <li><span className="font-bold">Project: </span>Build a CNN to classify images (e.g., MNIST digits, CIFAR-10 dataset). Experiment with different architectures and data augmentation.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 7:</span>
        Natural Language Processing (NLP) Basics
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Text Preprocessing: </span>Tokenization, stemming, lemmatization, stop words.</li>
        <li><span className="font-bold">Text Representation: </span>Bag-of-Words, TF-IDF.</li>
        <li><span className="font-bold">Recurrent Neural Networks (RNNs) / LSTMs (Introduction): </span>Understanding sequential data.</li>
        <li><span className="font-bold">Project: </span>Build a text classification model (e.g., sentiment analysis of movie reviews) using traditional ML (scikit-learn) and a simple RNN/LSTM in Keras.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 8:</span>
        Unsupervised Learning & Dimensionality Reduction
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Clustering: </span>K-Means, Hierarchical Clustering.</li>
        <li><span className="font-bold">Dimensionality Reduction: </span>Principal Component Analysis (PCA).</li>
        <li><span className="font-bold">Anomaly Detection (Introduction): </span>Isolation Forest, One-Class SVM.</li>
        <li><span className="font-bold">Project: </span>Apply K-Means clustering to segment customers based on their purchasing behavior. Use PCA to reduce the dimensionality of a dataset and visualize it.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-6 mb-2 text-white">
        <span className="font-bold">Phase 3: </span>
        Flagship Project & Portfolio (Days 61-90)
      </p>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 9:</span>
        Flagship AI/ML Project - Problem Definition & Data
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Conceptualize: </span>Choose a substantial AI/ML project that excites you and allows you to apply multiple learned concepts (e.g., a recommendation system, a more advanced image classifier, a simple chatbot, a predictive model for a real-world problem).</li>
        <li><span className="font-bold">Data Acquisition & Cleaning: </span>Spend time finding a suitable dataset and performing thorough cleaning and preprocessing.</li>
        <li><span className="font-bold">Feature Engineering: </span>Create new features to improve model performance.</li>
        <li><span className="font-bold">Project: </span>Start building your flagship AI/ML project. Focus on data preparation and initial model selection.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 10:</span>
        Flagship AI/ML Project - Model Building & Evaluation
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Model Iteration: </span>Experiment with different algorithms, architectures, and hyperparameters.</li>
        <li><span className="font-bold">Rigorous Evaluation: </span>Use appropriate metrics, cross-validation, and visualize results.</li>
        <li><span className="font-bold">Interpretability: </span>Understand why your model makes certain predictions (e.g., feature importance).</li>
        <li><span className="font-bold">Project: </span>Train and fine-tune your flagship AI/ML model. Document your experimental process and results in a detailed Jupyter Notebook.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 11:</span>
        Model Deployment (Basic) & Portfolio Integration
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Basic Deployment: </span>Learn how to expose your model via a simple API (e.g., using Flask or FastAPI).</li>
        <li><span className="font-bold">Portfolio Website: </span>Create or update your portfolio site. Dedicate a section to your AI/ML projects.</li>
        <li><span className="font-bold">Project Showcases: </span>For each project, include the Jupyter Notebook, code repository, a clear problem statement, methodology, results, and insights. If deployed, a link to the live demo.</li>
        <li><span className="font-bold">Hackathon Prep (Optional): </span>If you plan an AI/ML-focused hackathon, prepare a basic setup.</li>
      </ul>

      <p className="text-[15px] leading-10 mt-4 mb-2 text-white">
        <span className="font-bold">Week 12:</span>
        Job Readiness & Continuous Learning
      </p>
      <ul className="list-disc list-inside ml-4 text-[15px] leading-6 text-white">
        <li><span className="font-bold">Resume/CV & LinkedIn: </span>Highlight your AI/ML skills, projects, and data science toolkit.</li>
        <li><span className="font-bold">Interview Practice: </span>Be ready to discuss your projects, ML concepts, and problem-solving approach.</li>
        <li><span className="font-bold">Continuous Learning: </span>Explore MLOps, advanced deep learning architectures (Transformers), reinforcement learning, or cloud ML platforms (AWS SageMaker, GCP AI Platform).</li>
      </ul>
    </div>
  );
};

export default AIMLChallengePlan;
