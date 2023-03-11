import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Load the dataset
df = pd.read_csv('resume_dataset.csv')

# Preprocess the data
X = df[['work_experience', 'education', 'skills', 'keywords']]
y = df['quality']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print('MSE:', mse)
print('R-squared:', r2)

# Deploy the model
new_resume = pd.DataFrame({'work_experience': 5, 'education': 3, 'skills': 8, 'keywords': 10}, index=[0])
quality = model.predict(new_resume)[0]
print('Quality:', quality)
