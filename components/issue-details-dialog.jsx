"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useUser, useOrganization } from "@clerk/nextjs";
import useFetch from "@/hooks/use-fetch";
import { deleteIssue, updateIssue } from "@/action/issues";
import { ExternalLink } from "lucide-react";
import { BarLoader } from "react-spinners";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import statuses from "@/data/status";
import MDEditor from "@uiw/react-md-editor";
import UserAvatar from "./user-avatar";
const IssueDetailsDialog = ({
  isOpen,
  onClose,
  issue,
  onDelete = () => {},
  onUpdate = () => {},
  borderCol = "",
}) => {
  const router = useRouter();
  const [status, setStatus] = useState(issue.status);
  const [priority, setPriority] = useState(issue.priority);
  const pathname = usePathname();

  const { user } = useUser();
  const { membership } = useOrganization();
  const priorityOptions = ["LOW", "MEDIUM", "HIGH", "URGENT"];
  const {
    loading: deleteLoading,
    error: deleteError,
    fn: deleteIssueFn,
    data: deleted,
  } = useFetch(deleteIssue);
  const {
    loading: updateLoading,
    error: updateError,
    fn: updateIssueFn,
    data: updated,
  } = useFetch(updateIssue);

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);
    updateIssueFn(issue.id,{status:newStatus,priority})
  };
  const handlePriorityChange = async (newPriority) => {
    setStatus(newPriority);
    updateIssueFn(issue.id,{status,priority:newPriority})
  };
  const handleDelete = () =>{
    if(window.confirm('Are you sure want to delete this issue')){
        deleteIssueFn(issue.id);
    }
  }

  useEffect(()=>{
    if(deleted){
        onClose();
        onDelete();
    }
    if(updated){
        onUpdate(updated);
    }
  },[deleted,updated,deleteLoading,updateLoading]);
  const canChange =

    user.id === issue.reporter.clerkUserId || membership.role === "org:admin";

  const handleGoToProject = () => {
    router.push(`/project/${issue.projectId}?sprint=${issue.sprintId}`);
  };
  const isProjectPage = !pathname.startsWith("/project/");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-3xl">{issue.title}</DialogTitle>
          </div>
          {!isProjectPage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGoToProject}
              title="Go to Project"
            >
              <ExternalLink className="h-4 w-4"></ExternalLink>
            </Button>
          )}
        </DialogHeader>
        {(updateLoading || deleteLoading) && (
          <BarLoader width={"100%"} color="#36d7b7" />
        )}

        <div className="
        space-y-4">
          <div className="flex items-center space-x-2">
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>

              <SelectContent>
                {statuses.map((option) => (
                  <SelectItem value={option.key} key={option.key}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priority} onValueChange={handlePriorityChange}
            disabled={!canChange}>
              <SelectTrigger className={`border ${borderCol} rounded`}>
                <SelectValue placeholder="Priority" />
              </SelectTrigger>

              <SelectContent>
                {priorityOptions.map((option) => (
                  <SelectItem value={option} key={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <h4 className="font-semibold ">Description</h4>
            <MDEditor.Markdown className="rounded px-2 py-1"
            source={issue.description ? issue.description : '--'}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Assignee</h4>
                <UserAvatar user={issue.assignee}/>
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="font-semibold">Reporter</h4>
                <UserAvatar user={issue.reporter}/>
            </div>
          </div>
          {canChange && (
            <Button
            onClick={handleDelete}
            disabled={deleteLoading}
            variant='destructive'>
                {deleteLoading ? "Deleting..." : "Delete Issue"}
            </Button>
          )}
          {(deleteError || updateError) && (
            <p className="text-red-500">
                {deleteError?.message || updateError?.message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default IssueDetailsDialog;
