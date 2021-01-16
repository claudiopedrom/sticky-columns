import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const StickyColumns = () => {
  return (
    <div className="container m-auto p-8">
      <div className="flex flex-wrap -mx-2">
        <div className="sticky top-4 w-1/2 h-full px-2">
          <div className="mb-2">
            <Skeleton height={400} width={400} />
          </div>
          <Skeleton count={10} />
        </div>
        <div className="w-1/2 px-2">
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Skeleton circle={true} height={50} width={50} />
            </div>
            <div>
              <Skeleton count={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
