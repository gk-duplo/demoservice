
{
	"Roles": [{
		"Name": "djangohw",
		"DockerImage": "duplocloud/anyservice:<hubtag>",
		"Replicas": 1,
		"NetworkId": "default",
		"AgentPlatform": 0,
		"ExtraConfig": "\"FOO=BAR2\"",
		"AllocationTags": "",
		"Tags": [],
		"ApplicationUrl": "",
		"IsInfraDeployment": false,
		"SecondaryTenant": "",
		"LBConfigurations": [{
			"Name": "tcp|80",
			"ReplicationControllerName": "djangohw",
			"Protocol": "tcp",
			"Port": "80",
			"VirtualIPAddress": null,
			"HostPort": 0,
			"IsInfraDeployment": false,
			"DnsName": null,
			"CertificateArn": null,
			"ExternalPort": 80,
			"IsInternal": false,
			"CloudName": null,
			"ForHealthCheck": false,
			"TenantId": "",
			"State": null
		}],
		"TenantId": "",
		"State": null
	}, {
		"Name": "demo_db",
		"DockerImage": "redis:latest",
		"Replicas": 1,
		"NetworkId": "default",
		"AgentPlatform": 0,
		"Volumes": null,
		"Commands": null,
		"ExtraConfig": "",
		"AllocationTags": "",
		"Tags": [],
		"ApplicationUrl": "",
		"IsInfraDeployment": false,
		"SecondaryTenant": "",
		"LBConfigurations": [],
		"TenantId": "",
		"State": null
	}],
	"TenantId": null,
	"State": null
}
