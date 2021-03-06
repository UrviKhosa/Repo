USE [master]
GO
/****** Object:  User [NT SERVICE\ReportServer$SQLEXPRESS]    Script Date: 10-10-2019 19:11:18 ******/
CREATE USER [NT SERVICE\ReportServer$SQLEXPRESS] FOR LOGIN [NT SERVICE\ReportServer$SQLEXPRESS] WITH DEFAULT_SCHEMA=[NT SERVICE\ReportServer$SQLEXPRESS]
GO
/****** Object:  User [##MS_PolicyEventProcessingLogin##]    Script Date: 10-10-2019 19:11:18 ******/
CREATE USER [##MS_PolicyEventProcessingLogin##] FOR LOGIN [##MS_PolicyEventProcessingLogin##] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [##MS_AgentSigningCertificate##]    Script Date: 10-10-2019 19:11:18 ******/
CREATE USER [##MS_AgentSigningCertificate##] FOR LOGIN [##MS_AgentSigningCertificate##]
GO
/****** Object:  DatabaseRole [RSExecRole]    Script Date: 10-10-2019 19:11:18 ******/
CREATE ROLE [RSExecRole]
GO
ALTER ROLE [RSExecRole] ADD MEMBER [NT SERVICE\ReportServer$SQLEXPRESS]
GO
/****** Object:  Schema [NT SERVICE\ReportServer$SQLEXPRESS]    Script Date: 10-10-2019 19:11:18 ******/
CREATE SCHEMA [NT SERVICE\ReportServer$SQLEXPRESS]
GO
/****** Object:  Schema [RSExecRole]    Script Date: 10-10-2019 19:11:18 ******/
CREATE SCHEMA [RSExecRole]
GO
/****** Object:  Table [dbo].[PaymentDtls]    Script Date: 10-10-2019 19:11:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentDtls](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[txtType] [varchar](50) NULL,
	[userId] [int] NULL,
	[skillId] [int] NULL,
	[mentorId] [int] NULL,
	[skillName] [varchar](50) NULL,
	[mentorfees] [int] NULL,
	[commision] [varchar](50) NULL,
	[PaymentStatus] [bit] NULL,
	[fees] [varchar](50) NULL,
 CONSTRAINT [PK_PaymentDtls] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SkillDtls]    Script Date: 10-10-2019 19:11:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SkillDtls](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[toc] [varchar](50) NULL,
	[prerequisites] [varchar](50) NULL,
	[timings] [varchar](50) NULL,
	[fees] [varchar](50) NULL,
 CONSTRAINT [PK_SkillDtls] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TrainingDtls]    Script Date: 10-10-2019 19:11:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TrainingDtls](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[status] [varchar](50) NULL,
	[progress] [int] NULL,
	[commisionAmount] [float] NULL,
	[rating] [int] NULL,
	[avaRating] [float] NULL,
	[startDate] [date] NULL,
	[endDate] [date] NULL,
	[timeSlot] [varchar](50) NULL,
	[amountReceived] [float] NULL,
	[userId] [int] NULL,
	[userName] [varchar](50) NULL,
	[mentorId] [int] NULL,
	[mentorName] [varchar](50) NULL,
	[skillId] [int] NULL,
	[skillname] [varchar](50) NULL,
	[accept] [bit] NULL,
	[rejected] [bit] NULL,
	[PaymentStatus] [bit] NULL,
 CONSTRAINT [PK_TrainingDtls] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserDtls]    Script Date: 10-10-2019 19:11:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserDtls](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](50) NOT NULL,
	[userName] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[firstName] [varchar](50) NOT NULL,
	[lastName] [varchar](50) NOT NULL,
	[contactNumber] [numeric](10, 0) NOT NULL,
	[regCode] [varchar](50) NULL,
	[role] [int] NOT NULL,
	[linkdinUrl] [varchar](50) NULL,
	[yearOfExperience] [int] NULL,
	[active] [bit] NOT NULL,
	[confirmedSignUp] [bit] NULL,
	[resetPasswordDate] [datetime] NULL,
	[resetPassword] [bit] NULL,
	[pictureUrl] [varchar](50) NULL,
	[TrainerTimings] [varchar](50) NULL,
	[TrainerTechnology] [varchar](50) NULL,
 CONSTRAINT [PK_UserDtls] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
