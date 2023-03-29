K-nearest neighbors algorithm can be used for classification. For example, looking at a graph with an unclassified point, we can classify it based on its n closest neighbors. 

K-nearest neighbors can also be used in recommendation systems, for example, recommending movies to one user based on the users with the most similar tastes. To find how similar two things are, we need to use Feature Extraction. 

### Feature extraction
Size and color are examples of the features used to compare fruits and plot them on a graph. To convert Netflix users into a set of numbers that can be plotted, we can have them rank movie categories and how likely they're to watch them. In the first example, we calculate the distance in 2 dimensions, while in the second, we calculate the distance in *x* number of dimensions that is the number of categories. 

### Finding similarity
To calculate the distance (similarity), we use the Pythagorean formula: $\sqrt{(x_{1}-x_{2})+(y_{1}-y_{2})}$. The formula is flexible, we can have more sets of numbers. The less the distance, the closer. Cosine similarity is another formula that is used to find similarity. It compares the angles of the vectors instead of the distance between them.

### Regression
Regression is another use case for the KNN algorithm (beside classification), which is predicting a response based on the k-nearest neighbors. For example, guessing what rating a certain user would give to a movie based on how his k-nearest neighbors rated it by getting their average rating. 

**Classification = categorization into a group.  
Regression = predicting a response (like a number).**


### Picking features
When picking features for the KNN algorithm, they need to be:
* Directly correlated to things we're classifying
* Don't have a bias
There’s no one right answer when it comes to picking good features. You have to think about all the different things you need to consider. 


**When working with N neighbors to classify a new thing, it is a good idea to look at $\sqrt{N}$ neighbors**

### Machine Learning
KNN is considered a non-parametric, supervised learning classifier which uses proximity to make classifications or predictions about the grouping of an individual data point.

KNN can be used in OCR (optical character recognition) to identify text by going through images of text and extracting their features (*training*). When we get a new image, we compare it using its features and see what are the nearest neighbors. OCR algorithms use lines, points, and curves as features. 

### Naive Bayes Classifier
Naive Bayes classifier can be used to build a spam filter. After training it on some data, it can break new emails into words and see what the probability is for that word to show up in a spam email. 

