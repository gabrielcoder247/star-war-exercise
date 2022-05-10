export const GET_CHARACTERS = "get/CHARACTERS";

const URL = "https://api.spacexdata.com/v3/missions";

export const getCharacter = (id) => ({
    type: GET_CHARACTERS,
    payload: id,
});


export const fetchAllCharacter = async() => {
    const response = await fetch(URL);
    return response.json();
};

export const getCharacters = () => async(dispatch) => {
    const response = await fetch(URL);
    const data = await response.json();
    const missionArr = [];
    data.forEach((m) => {
        const mission = {
            mission_id: m.mission_id,
            mission_name: m.mission_name,
            mission_description: m.description,
        };
        missionArr.push(mission);
    });
    dispatch(loadMission(missionArr));
};

// export default getMissions;

export const missionsSelector = (state) => state.missions;

export const newStateToJoinMission = (missions, id) => {
    const newState = missions.map((mission) => {
        if (mission.mission_id !== id) {
            return mission;
        }
        return {...mission, isReserved: true };
    });
    return newState;
};
export const newStateToLeaveMission = (missions, id) => {
    const newState = missions.map((mission) => {
        if (mission.mission_id !== id) {
            return mission;
        }
        return {...mission, isReserved: false };
    });
    return newState;
};

const initialState = [];

const missionReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MISSION:
            return [...state, ...action.payload];
        case JOIN_MISSION:
            return newStateToJoinMission(state, action.payload);
        case LEAVE_MISSION:
            return newStateToLeaveMission(state, action.payload);
        default:
            return state;
    }
};
export default missionReducer;