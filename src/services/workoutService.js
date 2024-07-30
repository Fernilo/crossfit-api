const {v4: uuidv4} = require('uuid')
const Workout = require('../database/workout')

const getAllWorkouts = () => {
    try {
        const allWorkouts = Workout.getAllWorkouts();
        return allWorkouts;
    } catch (error) {
        throw error;
    }
}

const getOneWorkout = (workoutId) => {
    try {
        const workout = Workout.getOneWorkout(workoutId);
        return workout;
    } catch (error) {
        throw error;
    }
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuidv4(),
        createdAt: new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires"}),
        updatedAt: new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires"}),
      };
    try {
        const createdWorkout = Workout.createNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch (error) {
        throw error;
    }
}

const updateWorkout = (workoutId, body) => {
    try {
        const updatedWorkout = Workout.updateWorkout(workoutId, body);
        return updatedWorkout;
    } catch (error) {
        throw error;
    }
}

const deleteWorkout = (workoutId) => {
    try {
        Workout.deleteWorkout(workoutId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateWorkout,
    deleteWorkout
}
