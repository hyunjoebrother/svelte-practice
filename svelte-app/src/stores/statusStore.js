import { writable } from "svelte/store";

function createStore() {
  const { subscribe, set } = writable({
    memberState: "", // 모든 경우의 수 넘버링
    stateIcon: "",
    state1: "",
    state2: "",
  });

  return {
    subscribe,
    setAccountStatus: (memberState) => {
      let newState = {};

      if (memberState === "member1") {
        newState = {
          memberState: "member1",
          stateIcon: "/images/status/blue.svg",
          state1: "Verified",
          state2: "High",
        };
      } else if (memberState === "member2") {
        newState = {
            memberState: "member2",
            stateIcon: "/images/status/red.svg",
            state1: "Pending",
            state2: "Low",
        }
    }
        else {
        newState = {
          memberState: "",
          stateIcon: "",
          state1: "",
          state2: "",
        };
      }

      set(newState);
    },
  };
}

export const statusStore = createStore();
