export default useProgression;
/**
 * Useful to simulate a progression from 0 to 100.
 * Used in the documentation to simulate the behavior of progression bars or spinners for example.
 * Simulation is disabled during tests, replaced by a fixed value.
 */
declare function useProgression(): {
    progression: number;
};
