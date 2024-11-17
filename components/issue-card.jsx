import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import UserAvatar from './user-avatar';
import { format, formatDistanceToNow } from 'date-fns';

const priorityColor={
    LOW:"border-green-600",
    MEDIUM:"border-yello-300",
    HIGH:"border-orange-400",
    URGENT:"border-red-400",
}
const IssueCard = ({
    issue,
    showStatus=false,
    onDelete=()=>{},
    onUpdate=()=>{},
}) => {

  const [isDailogOpen, setIsDialogOpen] = useState(false);
  const created = formatDistanceToNow(new Date(issue.createdAt),{
    addSuffix:true,
  })
  return (
    <>
      <Card className='cursor-pointer hover:shadow-md transition-shadow'>
        <CardHeader
        className={`border-t-2 ${priorityColor[issue.priority]} rounded-lg`}>
            <CardTitle>
                {issue.title}
            </CardTitle>
        </CardHeader>
        <CardContent className='flex gap-2 -mt-3'>
            {showStatus && <Badge>{issue.status}</Badge>}
            <Badge variant='outline' className='-ml-1'>{issue.priority}</Badge>
        </CardContent>
        <CardFooter className='flex flex-col items-start space-y-3'>
          <UserAvatar user={issue.assignee}/>

          <div className='text-xs text-gray-400 w-full'>Created {created}</div>
        </CardFooter>
      </Card>

      {isDailogOpen && <></>}
    </>
  )
}

export default IssueCard;
