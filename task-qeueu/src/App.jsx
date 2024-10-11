import { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import TimeOutBar from './components/TimeOutBar';

function App() {
    const [tasks, setTasks] = useState([]);
    const [priorityQueue, setHighPriorityQueue] = useState([]);
    const [regularQueue1, setRegularQueue1] = useState([]);
    const [regularQueue2, setRegularQueue2] = useState([]);
    const [regularQueue3, setRegularQueue3] = useState([]);

    function generateRandomNumber(num) {
        return Math.floor(Math.random() * num) + 1;
    }

    function addRandomTask() {
        const randomNumber = generateRandomNumber(200);
        const isHighPriority = Math.random() < 0.25;
        const newTask = {
            num: randomNumber,
            highPriority: isHighPriority
        };
        setTasks([...tasks, newTask]);
    }

    function admitTask() {
        const rQueue1Empty = regularQueue1.length === 0;
        const rQueue2Empty = regularQueue2.length === 0;
        const rQueue3Empty = regularQueue3.length === 0;

        const rQueue1Sum = regularQueue1.reduce((acc, task) => acc + task.num, 0);
        const rQueue2Sum = regularQueue2.reduce((acc, task) => acc + task.num, 0);
        const rQueue3Sum = regularQueue3.reduce((acc, task) => acc + task.num, 0);

        if (tasks.length > 0) {
            const task = tasks[0];
            const newTasks = tasks.slice(1);
            if (task.highPriority) {
                setHighPriorityQueue([...priorityQueue, task]);
            } else {
                if (rQueue1Empty === true) {
                    setRegularQueue1([...regularQueue1, task]);
                } else if (rQueue2Empty === true) {
                    setRegularQueue2([...regularQueue2, task]);
                } else if (rQueue3Empty === true) {
                    setRegularQueue3([...regularQueue3, task]);
                } else {
                    if (rQueue1Sum < rQueue2Sum && rQueue1Sum < rQueue3Sum) {
                        setRegularQueue1([...regularQueue1, task]);
                    } else if (rQueue2Sum < rQueue1Sum && rQueue2Sum < rQueue3Sum) {
                        setRegularQueue2([...regularQueue2, task]);
                    } else if (rQueue3Sum < rQueue1Sum && rQueue3Sum < rQueue2Sum) {
                        setRegularQueue3([...regularQueue3, task]);
                    }
                }
            }
            setTasks(newTasks);
        }
    }

    function consumeTask(queueName) {
        switch (queueName) {
            case 'highPriority':
                setHighPriorityQueue(priorityQueue.slice(1));
                break;
            case 'regularQueue1':
                setRegularQueue1(regularQueue1.slice(1));
                break;
            case 'regularQueue2':
                setRegularQueue2(regularQueue2.slice(1));
                break;
            case 'regularQueue3':
                setRegularQueue3(regularQueue3.slice(1));
                break;
            default:
                break;
        }
    }

    return (
        <div className="App">
            <Grid container spacing={2} sx={{ borderStyle: "dotted dashed solid double", padding: "15px" }}>
                <Grid container>
                    <Grid xs={4} style={{ borderStyle: "dotted dashed solid double", minWidth: 750, padding: "20px" }}>
                        <div style={{ textAlign: 'left' }}>
                            <Button variant="contained" onClick={addRandomTask}>Add Random Task</Button>
                            <hr style={{ border: "none", padding: "5px" }} />
                            <Typography variant="h6" style={{ alignContent: 'left' }}>Task Queue</Typography>
                            <Grid container spacing={1}>
                                {tasks.map((task, index) => (
                                    <Grid xs={2} key={index} style={{ border: "2px solid", fontSize: '10px', borderColor: task.highPriority ? 'red' : 'white', padding: "2.5px", textAlign: "center" }}>
                                        {task.num}
                                    </Grid>
                                ))}
                            </Grid>
                            <hr style={{ border: "none", padding: "5px" }} />
                            <Button variant="contained" style={{ align: 'left' }} onClick={() => admitTask()}>Admit Task</Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={4}>
                        <Grid xs={4} sx={{ borderStyle: "dotted dashed solid double", borderColor: "red", minWidth: 400, minHeight: 200, padding: "20px" }}>
                            <div style={{ textAlign: "left" }}>
                                <Typography variant="h6">High Priority Queue</Typography>
                                <div>
                                    Queue List:
                                    <Grid container spacing={1}>
                                        {priorityQueue.map((task, index) => (
                                            <Grid xs={2} key={index} style={{ border: "2px solid", fontSize: '10px', borderColor: task.highPriority ? 'red' : 'white', padding: "2.5px", textAlign: "center" }}>
                                                {task.num}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                                <div style={{ paddingTop: "15px" }}>
                                    Duration:
                                    {priorityQueue.length > 0 && (
                                        <div id="high-priority-queue">
                                            <TimeOutBar consumeTask={() => consumeTask('highPriority')} reset={priorityQueue.length > 1} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={4} sx={{ borderStyle: "dotted dashed solid double", minWidth: 400, minHeight: 200, padding: "20px" }}>
                            <div style={{ textAlign: "left" }}>
                                <Typography variant="h6">Regular Queue 1</Typography>
                                <div>
                                    Queue List:
                                    <Grid container spacing={1}>
                                        {regularQueue1.map((task, index) => (
                                            <Grid xs={2} key={index} style={{ border: "2px solid", fontSize: '10px', borderColor: task.highPriority ? 'red' : 'white', padding: "2.5px", textAlign: "center" }}>
                                                {task.num}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                                <div style={{ paddingTop: "15px" }}>
                                    Duration:
                                    {regularQueue1.length > 0 && (
                                        <div id="regular-queue-1">
                                            <TimeOutBar consumeTask={() => consumeTask('regularQueue1')} reset={regularQueue1.length > 1} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={4} sx={{ borderStyle: "dotted dashed solid double", minWidth: 400, minHeight: 200, padding: "20px" }}>
                            <div style={{ textAlign: "left" }}>
                                <Typography variant="h6">Regular Queue 2</Typography>
                                <div>
                                    Queue List:
                                    <Grid container spacing={1}>
                                        {regularQueue2.map((task, index) => (
                                            <Grid xs={2} key={index} style={{ border: "2px solid", fontSize: '10px', borderColor: task.highPriority ? 'red' : 'white', padding: "2.5px", textAlign: "center" }}>
                                                {task.num}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                                <div style={{ paddingTop: "15px" }}>
                                    Duration:
                                    {regularQueue2.length > 0 && (
                                        <div id="regular-queue-2">
                                            <TimeOutBar consumeTask={() => consumeTask('regularQueue2')} reset={regularQueue2.length > 1} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Grid>
                        <Grid xs={4} sx={{ borderStyle: "dotted dashed solid double", minWidth: 400, minHeight: 200, padding: "20px" }}>
                            <div style={{ textAlign: "left" }}>
                                <Typography variant="h6">Regular Queue 3</Typography>
                                <div>
                                    Queue List:
                                    <Grid container spacing={1}>
                                        {regularQueue3.map((task, index) => (
                                            <Grid xs={2} key={index} style={{ border: "2px solid", fontSize: '10px', borderColor: task.highPriority ? 'red' : 'white', padding: "2.5px", textAlign: "center" }}>
                                                {task.num}
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                                <div style={{ paddingTop: "15px" }}>
                                    Duration:
                                    {regularQueue3.length > 0 && (
                                        <div id="regular-queue-3">
                                            <TimeOutBar consumeTask={() => consumeTask('regularQueue3')} reset={regularQueue3.length > 1} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
