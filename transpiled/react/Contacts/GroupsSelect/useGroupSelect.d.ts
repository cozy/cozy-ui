export default useGroupsSelect;
declare function useGroupsSelect({ allGroups, onGroupCreated, client, onGroupCreate, onGroupUpdate }: {
    allGroups: any;
    onGroupCreated: any;
    client: any;
    onGroupCreate: any;
    onGroupUpdate: any;
}): {
    createGroup: (group: any) => Promise<void>;
    renameGroup: (groupId: any, newName: any) => Promise<void>;
};
