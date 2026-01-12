-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreferences" (
    "userId" TEXT NOT NULL,
    "minDurationMinutes" INTEGER NOT NULL DEFAULT 10,
    "focusModeEnabled" BOOLEAN NOT NULL DEFAULT true,
    "blockedChannelIds" TEXT[],

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "ChannelScore" (
    "userId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChannelScore_pkey" PRIMARY KEY ("userId","channelId")
);

-- CreateTable
CREATE TABLE "InteractionEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "watchPercentage" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InteractionEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChannelScore" ADD CONSTRAINT "ChannelScore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InteractionEvent" ADD CONSTRAINT "InteractionEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
