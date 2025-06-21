const questions = [
    // DSA Questions
    {
        question: "What is the time complexity of accessing an element in an array?",
        options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n^2)"],
        answer: "A"
    },
    {
        question: "Which data structure uses LIFO?",
        options: ["A) Queue", "B) Stack", "C) Array", "D) Linked List"],
        answer: "B"
    },
    {
        question: "What is the space complexity of a binary tree with n nodes?",
        options: ["A) O(n)", "B) O(log n)", "C) O(1)", "D) O(n^2)"],
        answer: "A"
    },
    {
        question: "Which algorithm is used for finding the shortest path in a graph?",
        options: ["A) Dijkstra's Algorithm", "B) Merge Sort", "C) Quick Sort", "D) Binary Search"],
        answer: "A"
    },
    {
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["A) O(n log n)", "B) O(n^2)", "C) O(n)", "D) O(log n)"],
        answer: "B"
    },
    {
        question: "Which data structure is used to implement recursion?",
        options: ["A) Queue", "B) Stack", "C) Array", "D) Linked List"],
        answer: "B"
    },
    {
        question: "What is the average time complexity of searching in a balanced binary search tree?",
        options: ["A) O(n)", "B) O(log n)", "C) O(n log n)", "D) O(1)"],
        answer: "B"
    },
    {
        question: "Which of the following is not a type of linked list?",
        options: ["A) Singly Linked List", "B) Doubly Linked List", "C) Circular Linked List", "D) Random Linked List"],
        answer: "D"
    },
    {
        question: "What is the primary purpose of a hash table?",
        options: ["A) Sorting", "B) Searching", "C) Storing key-value pairs", "D) Graph representation"],
        answer: "C"
    },
    {
        question: "Which of the following sorting algorithms is stable?",
        options: ["A) Quick Sort", "B) Merge Sort", "C) Heap Sort", "D) Selection Sort"],
        answer: "B"
    },
  {
    question: "What is the time complexity of accessing an element in an array?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n^2)"],
    answer: "A"
  },
  {
    question: "Which data structure uses LIFO principle?",
    options: ["A) Queue", "B) Stack", "C) Array", "D) Linked List"],
    answer: "B"
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["A) O(n log n)", "B) O(n^2)", "C) O(n)", "D) O(log n)"],
    answer: "B"
  },
  {
    question: "Which algorithm is used to find the shortest path between nodes in a graph?",
    options: ["A) Kruskal's algorithm", "B) Prim's algorithm", "C) Dijkstra's algorithm", "D) Floyd-Warshall algorithm"],
    answer: "C"
  },
  {
    question: "What is the time complexity of Breadth-First Search (BFS) in a graph with V vertices and E edges?",
    options: ["A) O(V)", "B) O(E)", "C) O(V+E)", "D) O(VE)"],
    answer: "C"
  },
  {
    question: "Which data structure is best suited for implementing a priority queue?",
    options: ["A) Array", "B) Linked List", "C) Heap", "D) Stack"],
    answer: "C"
  },
  {
    question: "What property do binary search trees (BST) have?",
    options: ["A) Left subtree contains nodes with keys less than root", "B) Right subtree contains nodes with keys less than root", "C) Both subtrees contain nodes with keys equal to root", "D) No order property"],
    answer: "A"
  },
  {
    question: "Which of the following sorting algorithms is stable?",
    options: ["A) Quick Sort", "B) Merge Sort", "C) Heap Sort", "D) Selection Sort"],
    answer: "B"
  },
  {
    question: "Which traversals are used to get the nodes of a binary search tree in ascending order?",
    options: ["A) Preorder", "B) Postorder", "C) Inorder", "D) Level order"],
    answer: "C"
  },
  {
    question: "What is the auxiliary space complexity of Merge Sort?",
    options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    answer: "C"
  },
  {
    question: "Which of these is a non-linear data structure?",
    options: ["A) Array", "B) Queue", "C) Trees", "D) Stack"],
    answer: "C"
  },
  {
    question: "Which data structure uses FIFO principle?",
    options: ["A) Stack", "B) Queue", "C) Tree", "D) Graph"],
    answer: "B"
  },
  {
    question: "What does a hash function do in a hash table?",
    options: ["A) Stores keys", "B) Maps keys to indices", "C) Stores values", "D) Searches data linearly"],
    answer: "B"
  },
  {
    question: "What is the worst-case time complexity of inserting an element into a hash table?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    answer: "B"
  },
  {
    question: "In a balanced binary search tree, what is the height?",
    options: ["A) O(log n)", "B) O(n)", "C) O(1)", "D) O(n log n)"],
    answer: "A"
  },
  {
    question: "What is the method used to detect a cycle in a directed graph?",
    options: ["A) BFS", "B) DFS with recursion stack", "C) Dijkstra's algorithm", "D) Kruskal's algorithm"],
    answer: "B"
  },
  {
    question: "Which algorithm sorts an array by partitioning and recursively sorting the partitions?",
    options: ["A) Quick Sort", "B) Merge Sort", "C) Bubble Sort", "D) Insertion Sort"],
    answer: "A"
  },
  {
    question: "What is the best-case time complexity of Bubble Sort?",
    options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
    answer: "A"
  },
  {
    question: "What is the worst-case time complexity of accessing an element in a linked list?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    answer: "B"
  },
  {
    question: "Which data structure is used for implementing function calls and recursion?",
    options: ["A) Queue", "B) Stack", "C) Heap", "D) Tree"],
    answer: "B"
  },
  {
    question: "Which of the following is NOT a characteristic of a min-heap?",
    options: ["A) Parent node is smaller than child nodes", "B) Complete binary tree", "C) Used to implement priority queues", "D) Sorted tree"],
    answer: "D"
  },
  {
    question: "Which traversal visits nodes in the order: root, left, right?",
    options: ["A) Inorder", "B) Preorder", "C) Postorder", "D) Level order"],
    answer: "B"
  },
  {
    question: "In a graph, a path that starts and ends at the same vertex without repeating an edge is called...",
    options: ["A) Path", "B) Walk", "C) Cycle", "D) Tree"],
    answer: "C"
  },
  {
    question: "Which of these algorithms is used for topological sorting?",
    options: ["A) DFS", "B) BFS", "C) Dijkstra", "D) Bellman-Ford"],
    answer: "A"
  },
  {
    question: "What is the typical use of a trie data structure?",
    options: ["A) Storing sorted sets", "B) Fast prefix search", "C) Implementing trees", "D) Sorting large data"],
    answer: "B"
  },
  {
    question: "Which sorting algorithm has the best average case time complexity?",
    options: ["A) Bubble Sort", "B) Quick Sort", "C) Selection Sort", "D) Insertion Sort"],
    answer: "B"
  },
  {
    question: "What kind of data structure is a doubly linked list?",
    options: ["A) Linear", "B) Circular", "C) Non-linear", "D) Graph"],
    answer: "A"
  },
  {
    question: "Which is NOT a self-balancing binary search tree?",
    options: ["A) AVL tree", "B) Red-black tree", "C) Binary heap", "D) Splay tree"],
    answer: "C"
  },
  {
    question: "What is the best case time complexity for searching an element in a binary search tree?",
    options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    answer: "A"
  },
  {
    question: "Which algorithm technique is based on dividing a problem into sub-problems?",
    options: ["A) Greedy", "B) Divide and conquer", "C) Dynamic programming", "D) Backtracking"],
    answer: "B"
  },
  {
    question: "In dynamic programming, what is the key concept used to optimize recursive algorithms?",
    options: ["A) Recursion", "B) Memoization", "C) Backtracking", "D) Divide and conquer"],
    answer: "B"
  },
  {
    question: "Which data structure is mainly used to implement LRU Cache?",
    options: ["A) Queue", "B) Stack", "C) Hash Map and Doubly Linked List", "D) Trie"],
    answer: "C"
  },
  {
    question: "Which of the following is NOT a stable sorting algorithm?",
    options: ["A) Bubble Sort", "B) Merge Sort", "C) Quick Sort", "D) Insertion Sort"],
    answer: "C"
  },
  {
    question: "What is the function of the 'heapify' process in heaps?",
    options: ["A) Insert element", "B) Delete element", "C) Rearrange elements to satisfy heap property", "D) Search element"],
    answer: "C"
  },
  {
    question: "In graphs, which structure is used to store adjacency lists?",
    options: ["A) Array", "B) Linked List", "C) Hash Map", "D) All of the above"],
    answer: "D"
  },
  {
    question: "Which algorithm finds minimum spanning tree of a graph?",
    options: ["A) Dijkstra", "B) Kruskal", "C) Bellman-Ford", "D) Floyd-Warshall"],
    answer: "B"
  },
  {
    question: "Which technique is used to handle collisions in hash tables?",
    options: ["A) Chaining", "B) Open addressing", "C) Both A and B", "D) None"],
    answer: "C"
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n log n)"],
    answer: "C"
  },
  {
    question: "A perfect binary tree is one in which...",
    options: ["A) All leaves are at same level", "B) All internal nodes have two children", "C) Both A and B", "D) None"],
    answer: "C"
  },
  {
    question: "Which data structure is used in breadth-first traversal of a graph?",
    options: ["A) Stack", "B) Queue", "C) Priority Queue", "D) Hash Map"],
    answer: "B"
  },
  {
    question: "What is tail recursion?",
    options: ["A) Recursion calls itself as last operation", "B) Recursion with multiple calls", "C) Iteration", "D) Mutual recursion"],
    answer: "A"
  },
  {
    question: "Which data structure is used to parse expressions in compilers?",
    options: ["A) Stack", "B) Queue", "C) Trees", "D) Arrays"],
    answer: "A"
  },
  {
    question: "Which is NOT a divide and conquer algorithm?",
    options: ["A) Merge Sort", "B) Quick Sort", "C) Binary Search", "D) Bubble Sort"],
    answer: "D"
  },
  {
    question: "What is the maximum number of nodes in a binary tree of height h?",
    options: ["A) 2^h - 1", "B) h^2", "C) 2h - 1", "D) h!"],
    answer: "A"
  },
  {
    question: "Which algorithm is used for topological sorting?",
    options: ["A) BFS", "B) DFS", "C) Dijkstra's", "D) Kruskal's"],
    answer: "B"
  },
  {
    question: "The Tower of Hanoi problem is an example of...",
    options: ["A) Greedy algorithm", "B) Divide and conquer", "C) Dynamic programming", "D) Recursion"],
    answer: "D"
  },
  {
    question: "What data structure does the 'undo' functionality typically use?",
    options: ["A) Queue", "B) Stack", "C) Array", "D) Graph"],
    answer: "B"
  },
  {
    question: "Which of the following sorting algorithms is NOT comparison-based?",
    options: ["A) Quick Sort", "B) Heap Sort", "C) Counting Sort", "D) Merge Sort"],
    answer: "C"
  },
  {
    question: "What is the worst-case space complexity for recursive algorithms?",
    options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n log n)"],
    answer: "C"
  },
  {
    question: "Which of the following is NOT a graph traversal technique?",
    options: ["A) BFS", "B) DFS", "C) Binary Search", "D) None"],
    answer: "C"
  },
    {
        question: "What is the time complexity of accessing an element in an array?",
        options: ["A) O(1)", "B) O(n)", "C) O(log n)", "D) O(n^2)"],
        answer: "A"
    },
    {
        question: "Which data structure uses LIFO principle?",
        options: ["A) Queue", "B) Stack", "C) Array", "D) Linked List"],
        answer: "B"
    },
    {
        question: "What is the worst-case time complexity of Quick Sort?",
        options: ["A) O(n log n)", "B) O(n^2)", "C) O(n)", "D) O(log n)"],
        answer: "B"
    },
    {
        question: "Which algorithm is used to find the shortest path between nodes in a graph?",
        options: ["A) Kruskal's algorithm", "B) Prim's algorithm", "C) Dijkstra's algorithm", "D) Floyd-Warshall algorithm"],
        answer: "C"
    },
    {
        question: "What is the time complexity of Breadth-First Search (BFS) in a graph with V vertices and E edges?",
        options: ["A) O(V)", "B) O(E)", "C) O(V+E)", "D) O(VE)"],
        answer: "C"
    },
    // ... additional questions for brevity ...
];

// Shuffle function (Fisher-Yates shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let answeredQuestions = [];
let timer; // Timer variable
let timeLeft = 20* 60; // 30 minutes in seconds

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const percentageElement = document.getElementById('percentage');
const reviewContainer = document.getElementById('review-container');
const restartButton = document.getElementById('restart-button');
const timerElement = document.getElementById('time');

function startGame() {
    // Clone and shuffle
    shuffledQuestions = [...questions];
    shuffle(shuffledQuestions);

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    answeredQuestions = [];

    scoreContainer.style.display = 'none';
    nextButton.disabled = true;
    document.getElementById('quiz-container').style.display = 'block';

    // Start the timer
    startTimer();
    showNextQuestion();
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            showScoreReview(true); // Show results when time is up
        } else {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
}

function showNextQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showScoreReview(true);
        return;
    }
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    nextButton.disabled = true;

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(option, button));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption, buttonElement) {
    const allOptionButtons = optionsElement.querySelectorAll('button');
    allOptionButtons.forEach(button => {
        button.disabled = true;
        if (button.innerText.charAt(0) === shuffledQuestions[currentQuestionIndex].answer) {
            button.classList.add('selected');
        }
        if (button !== buttonElement && buttonElement.innerText.charAt(0) !== shuffledQuestions[currentQuestionIndex].answer) {
            if (button === buttonElement) {
              button.classList.add('wrong');
            }
        }
    });

    if (selectedOption.charAt(0) === shuffledQuestions[currentQuestionIndex].answer) {
        score++;
        buttonElement.classList.add('selected');
    } else {
        buttonElement.classList.add('wrong');
    }

    userAnswers[currentQuestionIndex] = selectedOption.charAt(0);
    answeredQuestions.push({
        question: shuffledQuestions[currentQuestionIndex].question,
        options: shuffledQuestions[currentQuestionIndex].options,
        correctAnswer: shuffledQuestions[currentQuestionIndex].answer,
        userAnswer: selectedOption.charAt(0)
    });

    currentQuestionIndex++;
    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    if (answeredQuestions.length % 100 === 0 && answeredQuestions.length > 0) {
        showScoreReview();
    } else {
        showNextQuestion();
    }
});

restartButton.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        document.getElementById('quiz-container').style.display = 'block';
        scoreContainer.style.display = 'none';
        showNextQuestion();
    } else {
        startGame();
    }
});

function showScoreReview(isFinal = false) {
    clearInterval(timer); // Stop the timer
    document.getElementById('quiz-container').style.display = 'none';
    scoreContainer.style.display = 'block';
    
    const questionsCount = Math.min(answeredQuestions.length, 100);
    const checkpointScore = answeredQuestions.slice(-questionsCount)
        .filter(q => q.userAnswer === q.correctAnswer).length;

    scoreElement.innerText = `${checkpointScore} / ${questionsCount}`;
    const percent = ((checkpointScore / questionsCount) * 100).toFixed(2);
    percentageElement.innerText = `Score Percentage: ${percent}%`;

    reviewContainer.innerHTML = '';

    const startIndex = Math.max(answeredQuestions.length - questionsCount, 0);
    for (let i = startIndex; i < answeredQuestions.length; i++) {
        const div = document.createElement('div');
        div.classList.add('review-item');

        const questionText = document.createElement('div');
        questionText.className = 'review-question';
        questionText.innerText = `Q${i + 1}: ${answeredQuestions[i].question}`;
        div.appendChild(questionText);

        const correctAnswerText = answeredQuestions[i].options.find(opt => opt.charAt(0) === answeredQuestions[i].correctAnswer);
        const userAnswerText = answeredQuestions[i].options.find(opt => opt.charAt(0) === answeredQuestions[i].userAnswer) || "No Answer";

        const correctDiv = document.createElement('div');
        correctDiv.className = 'correct-answer';
        correctDiv.innerText = `Correct Answer: ${correctAnswerText}`;
        div.appendChild(correctDiv);

        const userDiv = document.createElement('div');
        userDiv.className = 'user-answer';
        userDiv.innerText = `Your Answer: ${userAnswerText}`;
        div.appendChild(userDiv);

        reviewContainer.appendChild(div);
    }

    if (currentQuestionIndex < shuffledQuestions.length) {
        nextButton.innerText = 'Next 100 Questions';
    } else {
        nextButton.innerText = 'Finish';
    }
}

startGame();
